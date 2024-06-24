export const clipPathVariant = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: {
        clipPath: 'inset(0 0% 0 0)',
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.15,
            duration: 0.15
        }
    }
};

export const OpacityVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity : 1,
        transition: {
            duration: 0.25
        }
    }
};

export const containerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};