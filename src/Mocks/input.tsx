export const InputRest = [
  {
    type: "text",
    name: "name",
    placeholder: "Nome do Restaurante",
  },
  {
    type: "text",
    name: "address",
    placeholder: "Endereço do Restaurante",
  },

  {
    type: "text",
    name: "urlCover",
    placeholder: "Cole aqui a url de sua logo",
  },
  {
    type: "text",
    name: "urlLogo",
    placeholder: "Cole aqui a url da capa",
  },
  {
    type: "text",
    name: "responsible",
    placeholder: "Digite aqui o nome do responsável da empresa ",
  },
];
export const InputProduct = [
  {
    type: "text",
    name: "name",
    placeholder: "Nome do Produto",
  },
  {
    type: "text",
    name: "urlImage",
    placeholder: "Url da imagem",
  },

  {
    type: "text",
    name: "description",
    placeholder: "Descrição do produto",
  },
  {
    type: "number",
    name: "price",
    placeholder: "Preço do produto",
  },
  {
    extras: {
      name: "Molho Especial",
      price: 3,
    },
    name: "Bacon",
    price: 2.5,
  },
  { name: "Cebola", price: 1.5 },
];
