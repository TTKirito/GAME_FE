import { useState } from "react";
import Router from "next/router";
import { ArrowIcon, DetailItem, MenuContent, MenuItem, MenuStyled, MenuTitle, MenuWrapper, ToppingImage, ToppingItem, ToppingList, ToppingName } from "./Style";

export const Menu = ({ menu }) => {
  const [selectedKey, setSelectedKey] = useState(null);
  const [selectedTopping, setSelectedTopping] = useState(null);

  const toggleOrder = (key) => {
    setSelectedKey(selectedKey === key ? null : key);
  };

  const selectTopping = (topping) => {
    setSelectedTopping(topping.id);
    Router.push({ pathname: `/games`, query: { path: topping.path }});
  };

  return (
    <MenuStyled>
      <MenuContent>
        <MenuTitle>Menu</MenuTitle>
        {Object.keys(menu).map((key, index) => (
          <MenuWrapper key={index}>
            <MenuItem onClick={() => toggleOrder(key)}>
              <div>{key}</div>
              <ArrowIcon>{selectedKey === key ? "▲" : "▼"}</ArrowIcon>
            </MenuItem>
            {selectedKey === key && (
              <DetailItem>
                <ToppingList>
                  {menu[key].items.map((topping, inde) => (
                    <MenuWrapper key={inde}>
                      <ToppingItem
                        isActive={selectedTopping === topping.id}
                        onClick={() => selectTopping(topping)}
                      >
                        <ToppingImage
                          src={topping?.image?.original?.src}
                          alt={topping.image?.original?.alt}
                        />
                        <ToppingName>{topping.name}</ToppingName>
                      </ToppingItem>
                    </MenuWrapper>
                  ))}
                </ToppingList>
              </DetailItem>
            )}
          </MenuWrapper>
        ))}
      </MenuContent>
    </MenuStyled>
  );
}

export default Menu