import {
    Button,
} from "@chakra-ui/react";
import PropTypes from 'prop-types';

export const CustomButton= ({ colorScheme, variant, size, label, ...props }) => {
    return (
        <Button
            type="submit"
            colorScheme={colorScheme}
            variant={variant}
            size={size}
            {...props}
        >
            {label}
        </Button>
    )
}

Button.propTypes = {
    colorScheme: PropTypes.string,
    variant: PropTypes.string,
    size: PropTypes.oneOf(["lg","md","sm","xs"]),
}

Button.defaultProps = {
    colorScheme: "gray",
    variant: "solid",
}