export interface ProductsResponse {
  products: ProductResponse[];
}

export interface ProductResponse {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  vendor: string;
  product_type: string;
  tags: string[];
  variants: ProductVariants[];
  images: ProductImage[];
  options: ProductOptions[];
}

interface ProductOptions {
  name: string;
  position: number;
  values: string[];
}

interface ProductImage {
  id: number;
  created_at: string;
  position: number;
  updated_at: string;
  product_id: number;
  variant_ids?: number[];
  src: string;
  width: number;
  height: number;
}

interface ProductVariants {
  id: number;
  title: string;
  option1: string;
  option2: null | string;
  option3: null | string;
  sku: string;
  requires_shipping: boolean;
  taxable: boolean;
  featured_image: null | string;
  available: boolean;
  price: string;
  grams: number;
  compare_at_price: null | number;
  position: number;
  product_id: number;
  created_at: string;
  updated_at: string;
}
