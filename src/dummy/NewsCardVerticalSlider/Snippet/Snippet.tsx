import * as React from 'react';
import b from '@yandex-turbo/core/cn';
import './Snippet.scss';
import { INCVSitem } from '../NewsCardVerticalSlider';
const cls = b('snippet');

interface ISnippetProps {
    alt?: string;
    width?: number;
    height?: number;
}

type ISnippet = (
    props: INCVSitem & ISnippetProps
) => JSX.Element;

export const Snippet: ISnippet = ({
    href = '', agencyImageSrc, alt = 'alt', width = 30, height = 30, title, agency, time, isTurbo
    }) => (
        <div className={cls()}>
            <div className={cls('image')()}>
                <img
                    className={cls('image')('src')()}
                    src={agencyImageSrc}
                    alt={alt}
                    width={width}
                    height={height}
                />
            </div>
            <div className={cls('info')()}>
                <h2 className={cls('info')('title')()}>
                    <a href={href} className={cls('info')('link')()}>
                        {title}
                    </a>
                </h2>
                <div className={cls('agency-info')()}>
                    <div className={cls('agency-info')('agency')()}>
                        {agency.replace(' ', String.fromCharCode(160))}
                    </div>
                    <div className={cls('agency-info')('time', { turbo: isTurbo })()}>
                        {time}
                    </div>
                </div>
            </div>
        </div>
    );
