    function unique(array, compareKey)  {
        if (array.length === 0)
         {
            return [];
        }

        switch (typeof array[0]) {
            case 'object': {
                if (!compareKey) {
                    throw new Error(
                        'Compare key is for object arrays required.'
                    );
                }

                const result = [];
                const map = new Map();
                for (const item of array) {
                    if (!map.has(item[compareKey])) {
                        map.set(item[compareKey], true); // set any value to Map
                        result.push(item);
                    }
                }

                return result;
            }
            default:
                return array.filter((x, i) => i === array.indexOf(x));
        }
    }


module.exports = unique;