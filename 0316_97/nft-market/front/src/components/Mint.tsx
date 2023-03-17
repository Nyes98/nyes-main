import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import axios from "axios";
import Web3 from "web3";

export const Mint = ({ account, web3 }: { account: string; web3: Web3 }) => {
  const [NftName, setName] = useState<string>("");
  const [NftDescription, setDescription] = useState<string>("");
  const [file, setFile] = useState<File | undefined>();
  const [img, setImg] = useState<string | ArrayBuffer>("");

  const nameInput = useCallback((e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  }, []);

  const descriptionInput = useCallback((e: FormEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
  }, []);

  const fileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      setFile(e.currentTarget.files[0]);

      const reader = new FileReader();
      // 파일을 읽는 객체를 만든다.
      reader.readAsDataURL(e.currentTarget.files[0]);
      // 파일 내용을 가지고 element에서 띄울 수 있게 준비하도록 시킨다.
      reader.onload = () => {
        // 준비가 끝나면
        if (reader.result) {
          setImg(reader.result);
        }
      };
    }
  }, []);

  const mint = async () => {
    if (!NftName || !NftDescription || !file) return;
    const formData = new FormData();

    formData.append("file", file);
    formData.append("name", NftName);
    formData.append("description", NftDescription);
    formData.append("from", account);
    const result = (
      await axios.post("http://localhost:8080/api/mint", formData)
    ).data;
    console.log(result);
    web3.eth.sendTransaction(result);
  };
  return (
    <div>
      <input type="text" onInput={nameInput} placeholder={"NFT Name"} />
      <input
        type="text"
        onInput={descriptionInput}
        placeholder={"NFT Description"}
      />
      <input type="file" onChange={fileChange} />
      {img && (
        <div>
          <img src={img.toString()}></img>
        </div>
      )}
      <button onClick={mint}>Mint</button>
    </div>
  );
};