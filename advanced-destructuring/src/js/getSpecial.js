export default function getSpecial({ special }) {
  return special.map((specialAttack) => {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = specialAttack;

    return {
      id,
      name,
      icon,
      description,
    };
  });
}
