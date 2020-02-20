import curriculum from '../curriculum.json';
export default class Grades {
    static getGrade(path) {
        var classObj = curriculum;
        let paths = path.split('/');
        paths.pop();
        paths.shift();
        classObj = classObj['/'];
        for (var p in paths) {
            classObj = classObj.subClasses[paths[p] + '/'];
        }
        return this.getCreditsAndGrade(classObj, (paths.pop() + '/'))[1];
    }
    static getCreditsAndGrade(obj, path) {
        if (typeof obj.subClasses === 'undefined') {
            let credits = 1;
            if (typeof obj.credits !== 'undefined') {
                credits = obj.credits;
            }
            let grade = 0;
            if (typeof localStorage[path] !== 'undefined') {
                grade = localStorage[path];
            }
            return [credits, grade];
        } else {
            let credits = 0;
            let sumGrade = 0;
            for (var sub in obj.subClasses) {
                let cnd = this.getCreditsAndGrade(obj.subClasses[sub], sub);
                credits += cnd[0];
                sumGrade += (cnd[0] * cnd[1]);
            }
            return [credits, (sumGrade / credits)];
        }
    }
}