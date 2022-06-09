import React from 'react';

function Categories() {
  const [actIndex, setAcIndex] = React.useState(0);
  const categ = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  // const onClickCateg = (index) => {
  //   setAcIndex(index);
  // };
  return (
    <div className="categories">
      <ul>
        {categ.map((value, id) => (
          <li key={id} onClick={() => setAcIndex(id)} className={actIndex === id ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
