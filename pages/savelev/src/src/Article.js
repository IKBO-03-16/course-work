var i = 0;

const article = ({
  title,
  fullurl,
  pageid,
  pagelanguage,
  length,
  touched
}) => {
  let li = document.createElement('li');
  li.className = 'article';
  li.innerHTML = `
    <form>
      <span>Id: ${pageid}.</span>
      <span>Язык: ${pagelanguage}.</span>
      <span>Длина: ${length}.</span>
      <span>Изменено: ${touched}.</span>
      <br></br>
      <a id="url_${i}" href="${fullurl}">${title}</a>
      <br></br>
    </form>
  `;
  i = i + 1;
  return li;
};

export default article;
