namespace LivingWorld.Core.Time;

public class WorldClock
{
    public int MinuteOfDay { get; private set; } = 6 * 60;

    public string DisplayTime
    {
        get
        {
            var hours = MinuteOfDay / 60;
            var minutes = MinuteOfDay % 60;

            return $"{hours:00}:{minutes:00}";
        }
    }

    public void Tick()
    {
        MinuteOfDay += 1;

        if (MinuteOfDay >= 24 * 60)
        {
            MinuteOfDay = 0;
        }
    }
}