import porscheTaycan1 from '../assets/cars/porsche-taycan-1.webp'
import bmwM340i1 from '../assets/cars/bmw-m340i-1.webp'
import LandCruiser3001 from '../assets/cars/toyota-land-cruiser-300-1.webp'
import BmwX51 from '../assets/cars/bmw-x5-1.webp'
import MercedesC1 from '../assets/cars/mercedes-c-class-1.webp'
import AudiR81 from '../assets/cars/audi-r8-1.webp'
import { fuelTypes, bodyTypes, brand } from './options'

export const cars = [
  {
    id: 1,
    brand: brand.Porsche,
    model: "Taycan 4S",
    year: 2023,
    mileage: 8600,
    fuel: fuelTypes.electric,
    bodyType: bodyTypes.sedan,
    price: 156000,
    isNew: false,
    images: [
      porscheTaycan1,
    ]
  },

  {
    id: 2,
    brand: brand.BMW,
    model: "M340i",
    year: 2022,
    mileage: 30000,
    fuel: fuelTypes.petrol,
    bodyType: bodyTypes.sedan,
    price: 132000,
    isNew: true,
    images: [
      bmwM340i1,
    ]
  },

  {
    id: 3,
    brand: brand.Toyota,
    model: "Land Cruiser 300",
    year: 2026,
    mileage: 16,
    fuel: fuelTypes.diesel,
    bodyType: bodyTypes.suv,
    price: 96400,
    isNew: true,
    images: [
      LandCruiser3001,
    ]
  },

  {
    id: 4,
    brand: brand.BMW,
    model: "X5",
    year: 2018,
    mileage: 154000,
    fuel: fuelTypes.diesel,
    bodyType: bodyTypes.suv,
    price: 53900,
    isNew: false,
    images: [
      BmwX51,
    ]
  },

  {
    id: 5,
    brand: brand.Mercedes,
    model: "C-Class",
    year: 2008,
    mileage: 75000,
    fuel: fuelTypes.petrol,
    bodyType: bodyTypes.sedan,
    price: 105700,
    isNew: false,
    images: [
      MercedesC1,
    ]
  },

  {
    id: 6,
    brand: brand.Audi,
    model: "R8",
    year: 2022,
    mileage: 9000,
    fuel: fuelTypes.petrol,
    bodyType: bodyTypes.hatchback,
    price: 180000,
    isNew: true,
    images: [
      AudiR81,
    ]
  }

];
