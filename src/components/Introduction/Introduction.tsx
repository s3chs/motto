import useDestructureString from '../../utils/useDestructureString';

export default function Introduction() {

    return (
        <div className="introduction-container">
            <div>{useDestructureString('boire')}</div>
            <div>{useDestructureString('écouter')}</div>
            <div>{useDestructureString('manger')}</div>
            <div>{useDestructureString('partager')}</div>
        </div>
    );
}
