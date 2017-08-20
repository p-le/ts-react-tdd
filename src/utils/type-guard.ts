export const isReactElement = (child: React.ReactChild): child is React.ReactElement<any> => {
    return (child as React.ReactElement<any>).props !== undefined;
};
