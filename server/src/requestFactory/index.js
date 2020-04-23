export default function (controller) {
  return async (req, res) => {

    controller().then().catch()
  }
}

