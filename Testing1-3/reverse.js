const reverse = (str) => {
    try {
        const input = str.toString();
        const dataInput = input.split("");
        const dataReverse = dataInput.reverse();
        const joinRemove = dataReverse.join("");
        return joinRemove;
    } catch (err) {
        return err.message;
    }
}
// console.log(reverse("hello"));
module.exports = reverse;