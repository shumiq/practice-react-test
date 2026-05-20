import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within, expect } from "@storybook/test";
import { CounterButton } from "./CounterButton";

const meta: Meta<typeof CounterButton> = {
  title: "Components/CounterButton/Visual",
  component: CounterButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CounterButton>;

export const DisableDecrease: Story = {};

export const DisableIncrease: Story = {};

export const EnableAllEven: Story = {};

export const EnableAllOdd: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const increaseButton = canvas.getByRole("button", { name: /^Count:/ });
    await userEvent.click(increaseButton);
    const decreaseButton = canvas.getByRole("button", { name: "-" });
    await expect(increaseButton).toBeEnabled();
    await expect(decreaseButton).toBeEnabled();
    await expect(increaseButton).toHaveTextContent("Count: 1");
    await expect(increaseButton).toHaveClass("bg-indigo-600");
  },
};
