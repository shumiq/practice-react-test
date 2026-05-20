# React Testing Exercises

This project contains a simple counter component (`CounterButton`) backed by a custom hook (`useCounter`). Your goal is to fill in the missing test cases.

See [SETUP.md](./SETUP.md) for installation and available commands.

```bash
pnpm test          # Run all tests
pnpm test --watch  # Run in watch mode
```

## Exercises

There are **3 test files** with `it.todo` placeholders for you to implement.

### 1. Hook test — `src/hooks/useCounter.test.ts`

Test the `useCounter` hook in isolation with `renderHook` and `act`.

**Already implemented (examples):**
- `should return initial count of 0 by default` — basic render + assertion
- `should increase count by 1` — calling `increase()` inside `act()`

**You implement:**
| Test name | What to check |
|---|---|
| `should accept an initial value` | ??? |
| `???` | Pass `20`, expect count clamped to `10` |
| `should clamp initial value below 0` | ??? |
| `???` | Start at `5`, call `decrease()`, expect `4` |
| `should not increase above 10` | ??? |
| `???` | Start at `0`, call `decrease()`, count stays `0` |

### 2. Unit test — `src/components/CounterButton/CounterButton.unit.test.tsx`

Test the `CounterButton` component with the `useCounter` hook **mocked**. You must set up the mock yourself using `vi.mock`.

**Setup hints:**
- Create `mockIncrease` and `mockDecrease` with `vi.fn()`
- Create a mutable `mockCount` variable (use `let`)
- Mock `../../hooks/useCounter` with `vi.mock(path, factory)`
- Reset mocks in `beforeEach` with `vi.clearAllMocks()`

**You implement:**
| Test name | What to check |
|---|---|
| `should render count from mocked hook` | ??? |
| `???` | Click the count button, assert `mockIncrease` was called once |
| `should call decrease when decrease button is clicked` | ??? |
| `???` | `mockCount` is `0`, expect `-` button to be `toBeDisabled()` |
| `should be enabled when count is greater than 0` | ??? |

### 3. Integration test — `src/components/CounterButton/CounterButton.integration.test.tsx`

Test the `CounterButton` component with the **real** `useCounter` hook (no mocking). Click buttons and check actual state changes.

**Already implemented (example):**
- `should increment count on click` — clicks count button, verifies text changed to "Count: 1"

**You implement:**
| Test name | What to check |
|---|---|
| `???` | Click `+` twice to reach `2`, then click `-`, expect "Count: 1" |
| `should not go above 10` | ??? |

### 4. Storybook interaction test — `src/components/CounterButton/CounterButton.stories.tsx`

Test the `CounterButton` via Storybook interaction tests (play functions). These run inside the Storybook browser environment.

**Already implemented (examples):**
- `Default` — basic story with no interaction, renders the component
- `ClickToIncrement` — clicks the count button and verifies text changed to "Count: 1"

**You implement (add a `play` function to each story):**
| Story name | What to do in the play function |
|---|---|
| `IncrementAndDecrement` | ??? |
| `???` | Click `+` 10 times, expect "Count: 10" and button to be disabled |
| `EvenOddColors` | ??? |
| `???` | Expect the `-` button to be disabled |

## Tips

- Use `screen.getByRole('button', { name: ... })` to find buttons
- Use `await user.click(...)` from `@testing-library/user-event` for clicks
- Use `expect(...).toHaveTextContent(...)` to check button text
- Use `expect(...).toBeDisabled()` / `not.toBeDisabled()` for disabled state
- Use `expect(mockFn).toHaveBeenCalledTimes(n)` with mocked hooks
- Use `vi.mock(path, factory)` to mock the hook — the factory must return an object with `useCounter`
- Don't forget to call `vi.clearAllMocks()` in `beforeEach`
- For Storybook tests, use `within(canvasElement)` to scope queries to the story
- Storybook play functions must be `async` and use `await` for all `userEvent` and `expect` calls
- Run Storybook interaction tests with `pnpm storybook` then open the **Interactions** panel

## Reference files (don't modify)

- `src/hooks/useCounter.ts` — the hook under test
- `src/components/CounterButton/CounterButton.tsx` — the component under test
