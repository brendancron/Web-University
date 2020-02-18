import React from 'react';
import fileDownload from 'js-file-download';
import BSON from 'bson';

export default class LocalDownload extends React.Component {
    download() {
        fileDownload(BSON.serialize(localStorage), 'data.bson')
    }
    render() {
        return (
            <div onClick={this.download}>
                Download
            </div>
        );
    }
}
