const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const IIX = await promiseTheaterIXX();
    const VGC = await promiseTheaterVGC();

    const unionData = IIX.concat(VGC);

    let result = unionData.filter(
      element => (element.hasil === emosi)
    )

    return result.length;

  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  promiseOutput,
};
