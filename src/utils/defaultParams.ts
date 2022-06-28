import { Category, ParamsInputType } from "generated/graphql";

export const getSlidersDefaultParams: ParamsInputType = {
  pagination: {
    limit: 4,
  },
};

export const getNewsDefaultParams: ParamsInputType = {
  pagination: {
    limit: 6,
  },
  where: [
    {
      field: "status",
      value: "published",
    },
  ],
};

export const getActivitiesDefaultParams: ParamsInputType = {
  pagination: {
    limit: 5,
  },
  where: [
    {
      field: "status",
      value: "published",
    },
  ],
};

export const getScientificArticlesDefaultParams: ParamsInputType = {
  pagination: {
    limit: 5,
  },
  where: [
    {
      field: "status",
      value: "published",
    },
    {
      field: "category",
      value: Category.Ilmiah,
    },
  ],
};

export const getNonScientificArticlesDefaultParams: ParamsInputType = {
  pagination: {
    limit: 5,
  },
  where: [
    {
      field: "status",
      value: "published",
    },
    {
      field: "category",
      value: Category.NonIlmiah,
    },
  ],
};

export const getAlumniBusinessesDefaultParams: ParamsInputType = {
  pagination: {
    limit: 4,
  },
  where: [
    {
      field: "status",
      value: "published",
    },
  ],
};

export const getMerchandisesDefaultParams: ParamsInputType = {
  pagination: {
    limit: 8,
  },
  where: [
    {
      field: "status",
      value: "published",
    },
  ],
};
