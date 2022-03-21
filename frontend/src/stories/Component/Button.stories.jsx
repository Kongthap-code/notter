import { CustomButton } from "./Button";

export default {
  title: 'Component/Button',
  component: CustomButton,
  argTypes: {
    colorScheme: {
      options: ["whiteAlpha", "blackAlpha", "gray", "red", "orange", "yellow", "green", "teal", "blue", "cyan", "purple", "pink", "linkedin", "facebook", "messenger", "whatsapp", "twitter", "telegram"],
      control: { type: 'select' },
    },
    variant: {
      options: ["ghost", "outline", "solid", "link", "unstyled"],
      control: { type: 'select' },
    },
    size:{
      options: ["lg","md","sm","xs"],
      control: {type: 'select'},
    }
  },
}

const Template = (args) => <CustomButton {...args} />;

export const Default = Template.bind();

Default.args = {
  label: "Button",
  colorScheme: "gray",
  variant: "solid",
}