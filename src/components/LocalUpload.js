import React from 'react';
import BSON from 'bson';
import curriculum from '../curriculum.json';

export default class LocalUpload extends React.Component {
    loadFile(event) {
        var file = event.target.files[0];
        try {
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function () {
                var obj = BSON.deserialize(Buffer.from(reader.result));
                for (var i in obj) {
                    if (curriculum.hasOwnProperty(i)) {
                        console.log(i + "=" + obj[i]);
                        if (localStorage.hasOwnProperty(i)) {
                            console.log(localStorage[i]);
                            if (obj[i] > localStorage[i]) {
                                localStorage.setItem(i, obj[i]);
                            }
                        } else {
                            localStorage.setItem(i, obj[i]);
                        }
                    }
                }
                console.log(localStorage);
            };
        } catch (err) { }
    }
    render() {
        return (
            <input onChange={this.loadFile} type="file" id="myFile" accept=".bson" />
        );
    }
}
