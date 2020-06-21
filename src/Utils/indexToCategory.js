export default index => {
  const list = {
    1: 'Gaems',
    2: 'Programação',
    3: 'Dicas',
    4: 'Hot Takes',
    5: 'Opnião'
  }

  return list[index] || null
}