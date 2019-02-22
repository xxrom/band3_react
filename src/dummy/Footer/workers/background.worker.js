function calcDist(one, two) {
  return Math.sqrt(
    Math.abs((one.x - two.x) * (one.x - two.x)) +
      Math.abs((one.y - two.y) * (one.y - two.y))
  );
}

function generateNewItem(
  canvasWidth,
  canvasHeight,
  hideDistance,
  randomParam = 0
) {
  const rand = Math.random() * 4;

  if (rand < 1) {
    // left
    return {
      x: -hideDistance / 2,
      y: Math.random() * canvasHeight,
      step: 0.5 + Math.random() * 0.5,
      degree: ((30 + Math.random() * 120) * Math.PI) / 180,
    };
  }
  if (rand < 2) {
    // top
    return {
      x: Math.random() * canvasWidth,
      y: -hideDistance / 2,
      step: 0.5 + Math.random() * 0.5,
      degree: ((-60 + Math.random() * 120) * Math.PI) / 180,
    };
  }
  if (rand < 3) {
    // right
    return {
      x: canvasWidth + hideDistance / 2,
      y: Math.random() * canvasHeight,
      step: 0.5 + Math.random() * 0.5,
      degree: ((-30 - Math.random() * 120) * Math.PI) / 180,
    };
  }
  // bottom
  return {
    x: Math.random() * canvasWidth,
    y: canvasHeight + hideDistance / 2,
    step: 0.5 + Math.random() * 0.5,
    degree: ((120 + Math.random() * 120) * Math.PI) / 180,
  };

  return Math.random() > canvasHeight / canvasWidth
    ? {
        x: Math.random() * canvasWidth,
        y: randomParam,
        step: 0.5 + Math.random() * 0.5,
        degree: Math.random() * 180,
      }
    : {
        x: randomParam,
        y: Math.random() * canvasHeight,
        step: 0.5 + Math.random() * 0.5,
        degree: Math.random() * 180,
      };
}

function findNearItems({
  items,
  connectLength,
  canvasHeight,
  canvasWidth,
  hideDistance,
}) {
  const lines = [];
  const newItems = [];

  let newX = 0;
  let newY = 0;

  for (let i = 0; i < items.length; i += 1) {
    const { step, degree, x, y } = items[i];
    newX = x + step * Math.sin(degree);
    newY = y + step * Math.cos(degree);

    if (
      x > canvasWidth + hideDistance ||
      x < -hideDistance ||
      y > canvasHeight + hideDistance ||
      y < -hideDistance
    ) {
      newItems.push(generateNewItem(canvasWidth, canvasHeight, hideDistance));
    } else {
      newItems.push({
        x: newX,
        y: newY,
        step: items[i].step,
        degree: items[i].degree,
      });
    }
  }

  let one;
  let two;
  for (let i = 0; i < newItems.length; i += 1) {
    for (let j = i + 1; j < newItems.length; j += 1) {
      one = newItems[i];
      two = newItems[j];

      if (calcDist(one, two) < connectLength) {
        lines.push({
          x1: one.x,
          y1: one.y,
          x2: two.x,
          y2: two.y,
        });
      }
    }
  }

  return {
    lines,
    items: newItems,
  };
}

self.onmessage = function onMessage(props) {
  const { type, payload } = props.data;
  switch (type) {
    case 'find': {
      const ansObj = findNearItems(payload);
      this.postMessage(ansObj);
      break;
    }
    default: {
      console.log('W default');
      this.postMessage(props.data);
      break;
    }
  }
};
