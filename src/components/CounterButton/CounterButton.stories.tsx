import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within, expect } from "@storybook/test";
import { CounterButton } from "./CounterButton";

const meta: Meta<typeof CounterButton> = {
  title: "Components/CounterButton",
  component: CounterButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CounterButton>;

export const Default: Story = {};

export const ClickToIncrement: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const countButton = canvas.getByRole("button", { name: /^Count:/ });
    await userEvent.click(countButton);
    await expect(countButton).toHaveTextContent("Count: 1");
  },
};

export const IncrementAndDecrement: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const countButton = canvas.getByRole("button", { name: /^Count:/ });
    const decreaseButton = canvas.getByRole("button", { name: "-" });

    await userEvent.click(countButton);
    await userEvent.click(countButton);
    await userEvent.click(countButton);
    await expect(countButton).toHaveTextContent("Count: 3");

    await userEvent.click(decreaseButton);
    await expect(countButton).toHaveTextContent("Count: 2");
  },
};

export const MaxedOut: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const countButton = canvas.getByRole("button", { name: /^Count:/ });

    for (let i = 0; i < 10; i++) {
      await userEvent.click(countButton);
    }

    await expect(countButton).toHaveTextContent("Count: 10");
    await expect(countButton).toBeDisabled();
  },
};

export const EvenOddColors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const countButton = canvas.getByRole("button", { name: /^Count:/ });

    await expect(countButton.className).toContain("bg-red-");

    await userEvent.click(countButton);
    await expect(countButton.className).toContain("bg-indigo-");

    await userEvent.click(countButton);
    await expect(countButton.className).toContain("bg-red-");
  },
};

export const DecreaseDisabledAtZero: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button", { name: "-" })).toBeDisabled();
  },
};
