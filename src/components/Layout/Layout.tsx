import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { ReactNode } from 'react';

export default function Layout({children}: {children: ReactNode}) {

    return (
        <LocomotiveScrollProvider options={{
            smooth: true,
            mobile: {
                smooth: true,
            },
            tablet: {
                smooth: true,
            },
            smartphone: {
                smooth: true,
            },
            scrollFromAnywhere: true,
        }}

        >
            <main data-scroll-container className="layout-container">
                {children}
            </main>
        </LocomotiveScrollProvider>
    );
};
