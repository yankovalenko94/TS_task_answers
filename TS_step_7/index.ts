interface PlayerData<Game, Hours> {
	game: Game;
	hours: Hours;
	server: string;
}

const player1: PlayerData<string, number> = {
	game: "CS:GO",
	hours: 300,
	server: "basic",
};

const player2: PlayerData<number, string> = {
	game: 2048,
	hours: "300 h.",
	server: "arcade",
};

const player3: PlayerData<string, object> = {
	game: "Chess",
	hours: {
		total: 500,
		inMenu: 50,
	},
	server: "chess",
};

enum FigureNames {
	Rect = "rect",
	Circle = "circle",
	Triangle = "triangle",
	Line = "line",
}

interface Figure {
	name: FigureNames;
}

interface AmountOfFigures {
	squares: number;
	circles: number;
	triangles: number;
	others: number;
}

function calculateAmountOfFigures<T extends Figure>(
	figure: T[]
): AmountOfFigures {
	const amount: AmountOfFigures = {
		squares: 0,
		circles: 0,
		triangles: 0,
		others: 0,
	};

	figure.forEach((fig) => {
		switch (fig.name) {
			case FigureNames.Rect:
				amount.squares++;
				break;
			case FigureNames.Circle:
				amount.circles++;
				break;
			case FigureNames.Triangle:
				amount.triangles++;
				break;
			default:
				amount.others++;
		}
	});

	return amount;
}

const data = [
	{
		name: FigureNames.Rect,
		data: { a: 5, b: 10 },
	},
	{
		name: FigureNames.Rect,
		data: { a: 6, b: 11 },
	},
	{
		name: FigureNames.Triangle,
		data: { a: 5, b: 10, c: 14 },
	},
	{
		name: FigureNames.Line,
		data: { l: 15 },
	},
	{
		name: FigureNames.Circle,
		data: { r: 10 },
	},
	{
		name: FigureNames.Circle,
		data: { r: 5 },
	},
	{
		name: FigureNames.Rect,
		data: { a: 15, b: 7 },
	},
	{
		name: FigureNames.Triangle,
	},
];

console.log(calculateAmountOfFigures(data));
