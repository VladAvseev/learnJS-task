let i = 0;
while (i !== 10) {
    i += 0.2;
}

// Цикл бесконечный из-за потери точности. 0.1 + 0.2 === 0.3 вернет false