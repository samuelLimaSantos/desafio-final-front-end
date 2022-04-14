import { useState, useEffect, useCallback } from "react";
import { InputProduct } from "../../Mocks/input";
import Button from "../atom/Button";
import Input from "../atom/Input";
import axios from "../../service";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { ExtrasType } from "../../types/Extras";

const ProductForm = ({ handleModal, restaurant }: any) => {
  const [extras, setExtras] = useState<ExtrasType[]>([]);
  const [selectedExtras, setSelectedExtras] = useState<ExtrasType[]>([]);

  const navigation = useNavigate();

  useEffect(() => {
    getExtras();
  }, []);

  const getExtras = useCallback(async () => {
    const { data: extrasData } = await axios.get("/rest/products/extras");

    setExtras(extrasData);
  }, []);

  const sendData = async (e: any) => {
    try {
      e.preventDefault();
      const { name, urlImage, price, description } = e.target.elements;
      const data: any = {
        name: name.value,
        urlImage: urlImage.value,
        price: +price.value,
        idRestaurant: restaurant,
        description: description.value,
        extras: selectedExtras,
      };
      await axios.post("/rest/products", data);
      handleModal(true);
    } catch (err) {
      console.log(err);
    }
  };

  const removeExtra = useCallback((idExtra: string) => {
    const indexExtra = selectedExtras.findIndex(extra => extra.id === idExtra);

    if (indexExtra > -1) {
      const newSelectedExtras = [...selectedExtras];
      
      newSelectedExtras.splice(indexExtra, 1);

      setSelectedExtras(newSelectedExtras);
    }
  }, [selectedExtras]);

  return (
    <div className="container-product">
      <div className="close-modal">
        <button onClick={() => handleModal()}>X</button>
      </div>
      <h2>Registre um novo item</h2>
      <form className="container--form" onSubmit={sendData}>
        {InputProduct.map((item) => (
          <div className="container--input">
            <Input
              placeholder={item.placeholder}
              name={item.name}
              type={item.type}
            />
          </div>
        ))}
        <textarea
          name="description"
          id=""
          placeholder="Descrição do Produto"
        ></textarea>
        <label>Adicione Extras ao seu pedido (Opcional)</label>
        <select
          className="extras"
          name="extras"
          onChange={(element) => {
            if (element.target.value) {
              const selected = extras.find(
                (extra) => extra.id === element.target.value
              );
              const alreadySelected = selectedExtras.find(
                (extra) => extra.id === element.target.value
              );

              if (selected && !alreadySelected) {
                const selectedArray = [...selectedExtras, selected];

                setSelectedExtras(selectedArray);
              }
            }
          }}
        >
          {extras.map((extra) => (
            <>
              <option className="options" value={extra.id}>
                {extra.name}
              </option>
            </>
          ))}
        </select>
        <div className="card-extra">
          <div className="add-extra">
            {selectedExtras.map((extra) => (
              <p>
                {extra.name}
                <button onClick={() => removeExtra(extra.id)}>x</button>
              </p>
            ))}
          </div>
          <Button
            className="button--register--item"
            name="Cadastrar"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
