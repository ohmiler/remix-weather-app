export default function Index() {
  return (
    <div>
      <form action="/weather" method="get">
        City: <input type="text" name="city" />
        <input type="submit" value="Fetch Weather" />
      </form>
    </div>
  );
}
