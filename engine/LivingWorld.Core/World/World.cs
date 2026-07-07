using LivingWorld.Core.Time;

namespace LivingWorld.Core.World;

public class World
{
    public WorldClock Clock { get; } = new();

    public void Tick()
    {
        Clock.Tick();
    }
}