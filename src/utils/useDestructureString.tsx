import React from 'react';

type LocoScrollValues = Array<number>;

export const destructureString = (string: string, locoScrollValues?: LocoScrollValues): JSX.Element[] => {
    return string.split('').map((letter, i) => {
        const speed = locoScrollValues && locoScrollValues[i] ? locoScrollValues[i] : 1;
        const attributes = locoScrollValues ? { 'data-scroll': true, 'data-scroll-speed': speed } : {};
        return letter === ' ' ? <span key={i} {...attributes}>&nbsp;</span> : <span key={i} {...attributes}>{letter}</span>;
    });
};

const useDestructureString = (string: string, locoScrollValues?: LocoScrollValues): JSX.Element[] => {
    return React.useMemo(() => destructureString(string, locoScrollValues), [string, locoScrollValues]);
};

export default useDestructureString;
