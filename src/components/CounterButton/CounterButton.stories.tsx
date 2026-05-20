import type { Meta, StoryObj } from "@storybook/react-vite";
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
