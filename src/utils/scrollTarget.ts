export const getHashScrollBlock = (targetId: string): ScrollLogicalPosition =>
    targetId === 'velemenyek' ? 'center' : 'start';

export const scrollHashElementIntoView = (
    element: HTMLElement,
    targetId: string,
    behavior: ScrollBehavior = 'smooth',
) => {
    element.scrollIntoView({
        behavior,
        block: getHashScrollBlock(targetId),
        inline: 'nearest',
    });
};
