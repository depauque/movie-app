interface RatingProps {
  rating: { min: number; max: number };
  setRating: (rating: { min: number; max: number }) => void;
}

function Rating({ rating, setRating }: RatingProps) {
  const handleNums = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = +e.target.value;
    if (value < 0 || value > 10) return;
    const newRating = { ...rating, [key]: value };
    if (newRating.min < newRating.max) setRating(newRating);
  };

  return (
    <div className="rating">
      <h3 className="h3-sidebar">Рейтинг</h3>
      <div className="rating-inputs">
        <input
          type="number"
          name="min"
          value={rating.min}
          onChange={handleNums}
        />
        <input
          type="number"
          name="max"
          value={rating.max}
          onChange={handleNums}
        />
      </div>
    </div>
  );
}

export default Rating;
