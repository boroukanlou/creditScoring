// src/pages/EditRules.tsx
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Plus, Trash2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { useRulesStore, type ScoringRule } from "@/stores/rulesStore";

export default function EditRules() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { rules, updateRule, addRule, deleteRule, resetToDefault } =
    useRulesStore();

  const handleSave = () => {
    toast({
      title: "Rules Saved Permanently!",
      description: "All changes are saved and will be used in future scoring.",
    });
  };

  const handleAddRule = () => {
    const newRule: ScoringRule = {
      id: Date.now().toString(),
      feature: "New Rule",
      description: "Custom scoring factor",
      type: "custom",
      points: [{ condition: "Default", value: 0 }],
    };
    addRule(newRule);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </Button>
          <div className="flex items-center gap-1 -mt-2">
            <img
              src="logo.png"
              alt="dadeh kavan logo"
              className="w-10 h-10 mt-1"
            />
            <h1 className="text-3xl font-bold">Scoring Rules Editor</h1>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={resetToDefault}
              className="gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Reset to Default
            </Button>
            <Button onClick={handleSave} size="lg" className="gap-2">
              <Save className="w-5 h-5" /> Save Rules
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {rules.map((rule) => (
            <Card
              key={rule.id}
              className="relative hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <Input
                  value={rule.feature}
                  onChange={(e) =>
                    updateRule(rule.id, { feature: e.target.value })
                  }
                  className="text-xl font-bold"
                />
                <CardTitle className="text-sm text-gray-600 mt-2">
                  <Input
                    value={rule.description}
                    onChange={(e) =>
                      updateRule(rule.id, { description: e.target.value })
                    }
                    className="text-sm"
                  />
                </CardTitle>
                {rule.type !== "custom" && <Badge>Core Rule</Badge>}
              </CardHeader>
              <CardContent className="space-y-3">
                {rule.points.map((point, idx) => (
                  <div key={idx} className="flex gap-2">
                    <Input
                      value={point.condition}
                      onChange={(e) =>
                        updateRule(rule.id, {
                          points: rule.points.map((p, i) =>
                            i === idx ? { ...p, condition: e.target.value } : p
                          ),
                        })
                      }
                    />
                    <Input
                      type="number"
                      value={point.value}
                      onChange={(e) =>
                        updateRule(rule.id, {
                          points: rule.points.map((p, i) =>
                            i === idx
                              ? { ...p, value: Number(e.target.value) }
                              : p
                          ),
                        })
                      }
                      className="w-24 text-center font-bold"
                    />
                  </div>
                ))}
                {rule.type === "custom" && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteRule(rule.id)}
                    className="w-full mt-4"
                  >
                    <Trash2 className="w-4 h-4 mr-2" /> Delete Rule
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}

          <Card
            className="border-dashed border-2 hover:border-blue-500 cursor-pointer"
            onClick={handleAddRule}
          >
            <CardContent className="flex flex-col items-center justify-center h-64 text-gray-500">
              <Plus className="w-12 h-12 mb-4" />
              <p className="text-lg font-medium">Add Custom Rule</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
