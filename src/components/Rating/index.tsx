import styles from "./Rating.module.css";

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
    <div>
      <h4 className={styles.h4Sidebar}>Рейтинг</h4>
      <div className={styles.ratingInputs}>
        <input
          type="number"
          name="min"
          value={rating.min}
          onChange={handleNums}
          className={styles.textInputs}
        />
        <input
          type="number"
          name="max"
          value={rating.max}
          onChange={handleNums}
          className={styles.textInputs}
        />
      </div>
    </div>
  );
}

export default Rating;
