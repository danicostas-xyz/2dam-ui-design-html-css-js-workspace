# Posicionamiento

## Display block, inline, inline-block, none + visibility: hidden

- **Block**: width y height. Obvio también margin, padding, y demás
- **Inline**: No afecta width y height, pero sí margin y padding
- **Inline-block**: es un inline (solo ocupa el espacio del elemento interno) pero tiene width y height
- **None**: Oculta el elemento, no ocupa espacio, no es visible
- **Visibility**: hidden -> No se muestra el elemento, pero respeta el flujo de elemenos, ocupta un espacio invisible.

## Position static, absolute, relative

- **Static:** Es el comportamiento normal de los elementos html. El **flujo normal** por el cual los elementos se posicionan, ya sea en **display block** o **display inline**.
- **Relative:**
- **Absolute:**
- **Fixed:**
- **Sticky:**


## Display Flex

Hay que tener claro el concepto de eje principal y eje secundario, que no es lo mismo que eje horizontal y eje vertical. Por defecto, sí que es así, pero si cambias la propiedad de flex-direction a column, en ese caso, el eje principal es el eje vertical, y por lo tanto el justify-content aplica verticalmente.

- **Align items:** posiciona a la izquierda, centro o derecha en el eje secundario.

- **Align-content:** posiciona el contenido de un flex siempre que la propiedad flex-wrap esté activa y, por lo tanto, se haya formado una grilla.

- **Align-self:** Propiedad que va sobre el hijo. Permite alinear de forma independiente a lo que diga el padre un elemento que esté en una flexbox.

- **Flex-basis:** tamaño base de un elemento flex. Es un tamaño dinámico, por lo que si pones un tamaño exagerado, que no quepa, se va a adaptar.

- **Flex-shrink:** Cuándo va a encoger el elemento en función del resto de elementos de la flexbox, dado un flex-basis. El valor que le pongas a cada elemento en sí, se va a tomar en cuenta de forma relativa al valor del resto de elementos.

- **Flex-grow:**  Cuánto va a crecer el elemento en función del resto de elementos de la flexbox, dado un flex-basis. El valor que le pongas a cada elemento en sí, se va a tomar en cuenta de forma relativa al valor del resto de elementos.