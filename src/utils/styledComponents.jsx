/*
 * Define simple styled or react components
 */

export const Headline1 = (props) => {
    return (
      `<h1
        style={{
          color: 'red';
        }}>
        {props.children}
      </h1>`
    )
  }