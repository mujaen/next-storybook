import { storiesOf } from '@storybook/react';
import {withKnobs, number} from "@storybook/addon-knobs";
import StepProgressBar from "./StepProgressBar";


const stories = storiesOf('Molecular', module);
stories.addDecorator(withKnobs);

stories.add('StepProgressBar', () => {
    const total = number('Total Step', 4);
    const current = number('Current Step', 0);
    return <StepProgressBar total={total} current={current} />;
});