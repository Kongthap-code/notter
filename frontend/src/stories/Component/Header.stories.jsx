import { Header } from "./Header"

export default{
    title: "Component/Header",
    component: Header,
    parameters: {
        layout: 'fullscreen',
    }
}

const Template = (args) => <Header {...args} />

export const Default = Template.bind();
