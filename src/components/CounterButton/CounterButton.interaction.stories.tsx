import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within, expect } from "@storybook/test";
import { CounterButton } from "./CounterButton";

const meta: Meta<typeof CounterButton> = {
  title: "Components/CounterButton/Interaction",
  component: CounterButton,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof CounterButton>;

export const ClickToIncrement: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const countButton = canvas.getByRole("button", { name: /^Count:/ });
    await userEvent.click(countButton);
    await expect(countButton).toHaveTextContent("Count: 1");
  },
};

export const IncrementAndDecrement: Story = {};

export const EvenOddColors: Story = {};
