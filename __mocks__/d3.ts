// @ts-nocheck TODO: Fix TS
import { vi } from 'vitest';

const NewD3 = function () {
  /**
   *
   */
  function returnThis() {
    return this;
  }
  return {
    append: function () {
      return NewD3();
    },
    lower: returnThis,
    attr: returnThis,
    style: returnThis,
    text: returnThis,
    0: {
      0: {
        getBBox: function () {
          return {
            height: 10,
            width: 20,
          };
        },
      },
    },
  };
};

export const select = function () {
  return new NewD3();
};

export const selectAll = function () {
  return new NewD3();
};

export const curveBasis = 'basis';
export const curveLinear = 'linear';
export const curveCardinal = 'cardinal';

export const MockD3 = (name, parent) => {
  const children = [];
  const elem = {
    get __children() {
      return children;
    },
    get __name() {
      return name;
    },
    get __parent() {
      return parent;
    },
    node() {
      return {
        getBBox() {
          return {
            x: 5,
            y: 10,
            height: 15,
            width: 20,
          };
        },
      };
    },
  };
  elem.append = (name) => {
    const mockElem = MockD3(name, elem);
    children.push(mockElem);
    return mockElem;
  };
  elem.lower = vi.fn(() => elem);
  elem.attr = vi.fn(() => elem);
  elem.text = vi.fn(() => elem);
  elem.style = vi.fn(() => elem);
  return elem;
};
