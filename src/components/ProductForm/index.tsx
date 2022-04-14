import { useState, useEffect, useCallback } from 'react';
import { InputProduct } from "../../Mocks/input";
import Button from "../atom/Button";
import Input from "../atom/Input";
import axios from "../../service";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { ExtrasType } from '../../types/Extras';

const ProductForm = ({ handleModal, restaurant }: any) => {

  const [extras, setExtras] = useState<ExtrasType[]>([]);
  const [selectedExtras, setSelectedExtras] = useState<ExtrasType[]>([]);

  const navigation = useNavigate();
  const handleForm = () => {
    navigation(`product/${restaurant}`);
  };

  useEffect(() => {
    getExtras();
  }, [])

  const getExtras = useCallback(async () => {
    const { data: extrasData } = await axios.get('/rest/products/extras');

    setExtras(extrasData);
  }, [])

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
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container-product">
      <button className="button--register--item" onClick={handleModal}>
        X
      </button>
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
        <select name="extras" onChange={(element) => {
          if (element.target.value) {
            const selected = extras.find(extra => extra.id === element.target.value);
            const alreadySelected = selectedExtras.find(extra => extra.id === element.target.value);

            if (selected && !alreadySelected) {
              const selectedArray = [...selectedExtras, selected];

              setSelectedExtras(selectedArray);
            }
          }
        }}>
          {extras.map(extra => (
            <>
              <option value={extra.id}>{extra.name}</option>
            </>
          ))}
        </select>
        {selectedExtras.map(extra => (
          <div>
            <p>
              {extra.name}
            </p>
          </div>
        ))}
        <Button
          className="button--register--item"
          name="Cadastrar"
          type="submit"
        />
      </form>
    </div>
  );
};

export default ProductForm;
