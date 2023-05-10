const hello = () => 'paches';
const getStrings = () => ['paches', 'chue', 'isma'];
const getStringsParams = (_, { param }) => [param];
const getNumbers = (_, { numbers }) => numbers;
module.exports = { hello, getNumbers, getStrings, getStringsParams };
