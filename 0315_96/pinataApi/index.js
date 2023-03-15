const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const pinFileToIpfs = async () => {
  const formData = new FormData();
  const src = "imgs/test.png";

  const file = fs.createReadStream(src);
  formData.append("file", file);

  const metadata = JSON.stringify({
    name: "haaland.png",
  });
  formData.append("pinataMetadata", metadata);

  const options = JSON.stringify({
    cidVersion: 0,
  });
  formData.append("pinataOptions", options);

  try {
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        maxBodyLength: "Infinity",
        headers: {
          "content-type": `multipart/form-data; boundary=${formData._boundary}`,
          pinata_api_key: "52b826d2d010437edd76",
          pinata_secret_api_key:
            "ebe44161c94018b5a6ba565249609c69a992ea17f53cb780d08e916e98cd0b72",
        },
      }
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
// pinFileToIpfs();
// Qmec45Qr1XvY8UYG5rPssLwxhzPuJRaMjm4Ztno2tBFy8j

const pinJson = async () => {
  const formData = {
    pinataMetadata: {
      name: "NFT 1",
    },
    pinataOptions: {
      cidVersion: 0,
    },
    pinataContent: {
      name: "315 NFT",
      description: "피나타 사용중",
      image:
        "https://gateway.pinata.cloud/ipfs/Qmec45Qr1XvY8UYG5rPssLwxhzPuJRaMjm4Ztno2tBFy8j",
      attributes: [],
    },
  };

  try {
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      formData,
      {
        headers: {
          "content-type": "application/json",
          pinata_api_key: "52b826d2d010437edd76",
          pinata_secret_api_key:
            "ebe44161c94018b5a6ba565249609c69a992ea17f53cb780d08e916e98cd0b72",
        },
      }
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
pinJson();
// QmaJqP8KoCZuRbSPTUBcDkqCidLqoQgyb5vA96KQYZ3zPS
