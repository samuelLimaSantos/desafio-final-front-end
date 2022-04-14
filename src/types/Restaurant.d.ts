export type RestaurantType = {
  id: string,
  name: string,
  address: string,
  urlLogo: string,
  urlCover: string,
  description: string,
  responsible: string,
  products: [
    {
      id: string,
      name: string,
      urlImage: string,
      description: string,
      price: number,
      extras: [
        {
          id: string | number,
          name: string,
          price: number,
        }
      ]
    }
  ]
}