const tap = x => { console.log(x); return x}

const
    R = require('ramda'),
    Maybe = require('data.maybe')

const object = {
    a: {
        b: '1',
        c: {
            d: function () {
                return 'this is the thing the d value returns'
            }
        }
    }
}

const object2 = {
    a: {
        b: '1'
    }
}

const nothing_if_null_or_undefined = x =>
    x === null || x === undefined
        ? Maybe.Nothing()
        : Maybe.of(x)

const call_objects_d_or_get_nothing = object =>
    R.pipe(
        R.path(['a', 'c', 'd']),
        nothing_if_null_or_undefined,
        R.map(d => d()))
            (object)

const thing = call_objects_d_or_get_nothing(object).getOrElse('no thing!')
const thing2 = call_objects_d_or_get_nothing(object2).getOrElse('no thing 2!')

console.log(thing)
console.log(thing2)
