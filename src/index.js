import sky from 'module1'
import skyComp from 'module1/another_component'
import subSky from 'submodule/example'

const obj = {
    key: 'value',
    key2: 'value2'
}

console.log({ key3 : 'Hi', ...obj });
console.log(sky);
console.log(skyComp);