function solution(statues) {
    return Math.max(...statues) - Math.min(...statues) + 1 - statues.length;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test makeArrayConsecutive22

// alternative solution
