export async function replaceMongoIdInArray(array) {
  const mappedArray = array
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);

  return mappedArray;
}

export async function replaceMongoIdInObj(obj) {
  const { _id, ...rest } = { id: obj._id.toString(), ...obj };
  return { ...rest };
}

export const isDateInbetween = (date, from, to) => {
  return (
    new Date(date).getTime() >= new Date(from).getTime() &&
    new Date(date).getTime() <= new Date(to).getTime()
  );
};

export const getDayDifference = (from, to) => {
  return (
    (new Date(to).getTime() - new Date(from).getTime()) /
      (24 * 60 * 60 * 1000) +
    1
  );
};
