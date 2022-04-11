import React from 'react';
import Item from '../../assets/images/ic.png';
import File from '../../assets/images/file.svg';

export const Description = () => {
    return (
        <>
            <div className="description-wrap">
                <div className="box-left-wrap">
                    <div className="image-box">
                        <img src={Item} alt="" />
                    </div>
                    <div className="file">
                        <img src={File} alt="File Icon" />
                        datasheet
                    </div>
                </div>
                <div className="right-tbl">
                    <table cellSpacing="0">
                        <thead>
                            <tr>
                                <th>attributes</th>
                                <th>values</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>core processor</td>
                                <td>arm</td>
                            </tr>
                            <tr>
                                <td>non-core processor</td>
                                <td>not-arm 144 lqfp with othet properties features,</td>
                            </tr>
                            <tr>
                                <td>description</td>
                                <td>ic mcu 32bit 1MB flash </td>
                            </tr>
                            <tr>
                                <td>core processor</td>
                                <td>arm</td>
                            </tr>
                            <tr>
                                <td>core processor</td>
                                <td>arm</td>
                            </tr>
                            <tr>
                                <td>non-core processor</td>
                                <td>not-arm 144 lqfp with othet properties features,</td>
                            </tr>
                            <tr>
                                <td>description</td>
                                <td>ic mcu 32bit 1MB flash </td>
                            </tr>
                            <tr>
                                <td>core processor</td>
                                <td>arm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Description;
